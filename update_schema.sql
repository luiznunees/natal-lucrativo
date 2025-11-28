-- 1. Adicionar coluna session_id nas tabelas que faltam
alter table public.waitlist_leads add column if not exists session_id text;
alter table public.quiz_responses add column if not exists session_id text;

-- 2. Garantir que RLS está habilitado
alter table public.analytics_events enable row level security;
alter table public.site_visits enable row level security;
alter table public.waitlist_leads enable row level security;
alter table public.quiz_responses enable row level security;

-- 3. Recriar políticas de inserção pública (DROP primeiro para evitar erro de duplicidade)

-- Analytics Events
drop policy if exists "Permitir inserção pública em Analytics" on public.analytics_events;
create policy "Permitir inserção pública em Analytics"
on public.analytics_events
for insert
to anon
with check (true);

-- Site Visits
drop policy if exists "Permitir inserção pública em Visitas" on public.site_visits;
create policy "Permitir inserção pública em Visitas"
on public.site_visits
for insert
to anon
with check (true);

-- Waitlist Leads
drop policy if exists "Permitir inserção pública na Lista de Espera" on public.waitlist_leads;
create policy "Permitir inserção pública na Lista de Espera"
on public.waitlist_leads
for insert
to anon
with check (true);

-- Quiz Responses
drop policy if exists "Permitir inserção pública no Quiz" on public.quiz_responses;
create policy "Permitir inserção pública no Quiz"
on public.quiz_responses
for insert
to anon
with check (true);

-- 4. Políticas de Leitura (Apenas autenticados/admin)

-- Analytics Events
drop policy if exists "Permitir leitura admin em Analytics" on public.analytics_events;
create policy "Permitir leitura admin em Analytics"
on public.analytics_events
for select
to authenticated
using (true);

-- Site Visits
drop policy if exists "Permitir leitura admin em Visitas" on public.site_visits;
create policy "Permitir leitura admin em Visitas"
on public.site_visits
for select
to authenticated
using (true);

-- Waitlist Leads
drop policy if exists "Permitir leitura apenas para autenticados na Lista de Espera" on public.waitlist_leads;
create policy "Permitir leitura apenas para autenticados na Lista de Espera"
on public.waitlist_leads
for select
to authenticated
using (true);

-- Quiz Responses
drop policy if exists "Permitir leitura apenas para autenticados no Quiz" on public.quiz_responses;
create policy "Permitir leitura apenas para autenticados no Quiz"
on public.quiz_responses
for select
to authenticated
using (true);
