-- CRWD Database Schema
-- Migration 001: Initial schema for leads collection

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Table: leads_users
-- Stores user waitlist signups
create table if not exists leads_users (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  city text,
  marketing_consent boolean default true,
  source text default 'landing-user',
  created_at timestamptz default now()
);

-- Indexes for leads_users
create index if not exists idx_leads_users_created_at on leads_users (created_at desc);
create unique index if not exists idx_leads_users_email on leads_users (email);
create index if not exists idx_leads_users_city on leads_users (city) where city is not null;

-- Table: leads_venues
-- Stores venue/partner applications
create table if not exists leads_venues (
  id uuid primary key default gen_random_uuid(),
  contact_name text not null,
  email text not null,
  phone text,
  city text,
  marketing_consent boolean default true,
  source text default 'landing-venue',
  created_at timestamptz default now()
);

-- Indexes for leads_venues
create index if not exists idx_leads_venues_created_at on leads_venues (created_at desc);
create index if not exists idx_leads_venues_email on leads_venues (email);
create index if not exists idx_leads_venues_city on leads_venues (city) where city is not null;

-- Row Level Security (RLS)
-- Enable RLS on both tables
alter table leads_users enable row level security;
alter table leads_venues enable row level security;

-- Policies for leads_users
-- Allow anonymous inserts (for public signup forms)
create policy "allow_public_insert_leads_users"
  on leads_users
  for insert
  to anon
  with check (true);

-- Service role can do everything (for API routes)
create policy "allow_service_all_leads_users"
  on leads_users
  for all
  to service_role
  using (true)
  with check (true);

-- Policies for leads_venues
-- Allow anonymous inserts (for public signup forms)
create policy "allow_public_insert_leads_venues"
  on leads_venues
  for insert
  to anon
  with check (true);

-- Service role can do everything (for API routes)
create policy "allow_service_all_leads_venues"
  on leads_venues
  for all
  to service_role
  using (true)
  with check (true);

-- Comments for documentation
comment on table leads_users is 'Waitlist signups for end users';
comment on table leads_venues is 'Partnership applications from venues';
comment on column leads_users.city is 'City where user is located (for segmentation)';
comment on column leads_venues.city is 'City where venue is located (for segmentation)';

