const BREVO_URL = "https://api.brevo.com/v3";

const headers = {
  "api-key": process.env.BREVO_API_KEY!,
  "content-type": "application/json",
};

export async function upsertContact(
  email: string,
  listId: number,
  attributes: Record<string, any> = {},
  tags: string[] = []
) {
  const body = {
    email,
    listIds: [listId],
    attributes,
    updateEnabled: true,
    ...(tags.length > 0 && { tags }),
  };

  try {
    const res = await fetch(`${BREVO_URL}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (res.ok) {
      return { success: true, created: true };
    }

    // 409 = contact already exists -> update lists
    if (res.status === 409) {
      // Add contact to list if not already in it
      const updateRes = await fetch(
        `${BREVO_URL}/contacts/lists/${listId}/contacts/add`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ emails: [email] }),
        }
      );

      if (updateRes.ok || updateRes.status === 409) {
        return { success: true, created: false };
      }
    }

    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      `Brevo error ${res.status}: ${JSON.stringify(errorData)}`
    );
  } catch (error) {
    console.error("Brevo API error:", error);
    throw error;
  }
}

