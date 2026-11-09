-- Run in Supabase SQL Editor. Each account can only access its own cards.
create table if not exists public.card_inventory (
  user_id uuid not null references auth.users(id) on delete cascade,
  card_code text not null,
  quantity integer not null check (quantity between 1 and 9999),
  card_name text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, card_code),
  constraint card_code_format check (card_code ~ '^[A-Z0-9][A-Z0-9._/-]{2,79}$')
);
alter table public.card_inventory enable row level security;
revoke all on public.card_inventory from anon;
grant select, insert, update, delete on public.card_inventory to authenticated;
drop policy if exists "Read own cards" on public.card_inventory;
drop policy if exists "Insert own cards" on public.card_inventory;
drop policy if exists "Update own cards" on public.card_inventory;
drop policy if exists "Delete own cards" on public.card_inventory;
create policy "Read own cards" on public.card_inventory for select to authenticated using ((select auth.uid()) = user_id);
create policy "Insert own cards" on public.card_inventory for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Update own cards" on public.card_inventory for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Delete own cards" on public.card_inventory for delete to authenticated using ((select auth.uid()) = user_id);
create index if not exists card_inventory_user_idx on public.card_inventory (user_id);
