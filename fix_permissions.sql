-- Forçar permissões explícitas para o papel 'anon' (público) e 'authenticated'
grant usage on schema public to anon, authenticated;
grant all on all tables in schema public to anon, authenticated;
grant all on all sequences in schema public to anon, authenticated;
grant all on all functions in schema public to anon, authenticated;

-- Garantir que RLS está ativo
alter table public.site_visits enable row level security;
alter table public.analytics_events enable row level security;
alter table public.waitlist_leads enable row level security;
alter table public.quiz_responses enable row level security;

-- Recriar política de Site Visits (Visitas) de forma mais permissiva para teste
drop policy if exists "Permitir inserção pública em Visitas" on public.site_visits;
create policy "Permitir inserção pública em Visitas"
on public.site_visits
for insert
to anon, authenticated
with check (true);

-- Recriar política de Analytics Events
drop policy if exists "Permitir inserção pública em Analytics" on public.analytics_events;
create policy "Permitir inserção pública em Analytics"
on public.analytics_events
for insert
to anon, authenticated
with check (true);

-- Recriar política de Waitlist Leads
drop policy if exists "Permitir inserção pública na Lista de Espera" on public.waitlist_leads;
create policy "Permitir inserção pública na Lista de Espera"
on public.waitlist_leads
for insert
to anon, authenticated
with check (true);

-- Recriar política de Quiz Responses
drop policy if exists "Permitir inserção pública no Quiz" on public.quiz_responses;
create policy "Permitir inserção pública no Quiz"
on public.quiz_responses
for insert
to anon, authenticated
with check (true);
