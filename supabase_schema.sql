-- Tabela para armazenar as respostas do Quiz
create table public.quiz_responses (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text not null,
  whatsapp text not null,
  gender text null,
  result_type text null, -- 'urgente', 'pronta', 'receosa'
  answers jsonb null, -- Armazena todas as respostas detalhadas
  session_id text null,
  constraint quiz_responses_pkey primary key (id)
);

-- Tabela para armazenar os leads da Lista de Espera (Fake Door)
create table public.waitlist_leads (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text not null,
  whatsapp text not null,
  source text null default 'modal', -- 'modal', 'exit_popup', etc.
  session_id text null,
  constraint waitlist_leads_pkey primary key (id)
);

-- Habilitar Row Level Security (RLS) para segurança
alter table public.quiz_responses enable row level security;
alter table public.waitlist_leads enable row level security;

-- Políticas de Segurança (Policies)

-- Permitir que qualquer pessoa (anon) insira dados no Quiz
create policy "Permitir inserção pública no Quiz"
  on public.quiz_responses
  for insert
  to anon
  with check (true);

-- Permitir que qualquer pessoa (anon) insira dados na Lista de Espera
create policy "Permitir inserção pública na Lista de Espera"
  on public.waitlist_leads
  for insert
  to anon
  with check (true);

-- Permitir que apenas usuários autenticados (Admin) vejam os dados
-- (Você precisará estar logado no painel do Supabase para ver)
create policy "Permitir leitura apenas para autenticados no Quiz"
  on public.quiz_responses
  for select
  to authenticated
  using (true);

create policy "Permitir leitura apenas para autenticados na Lista de Espera"
  on public.waitlist_leads
  for select
  to authenticated
  using (true);

-- Tabela para eventos de Analytics (Rastreamento Interno)
create table public.analytics_events (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  event_name text not null, -- 'page_view', 'quiz_start', 'quiz_complete', 'waitlist_open', 'cta_click'
  event_data jsonb null, -- Detalhes extras (url, step, button_text)
  session_id text null, -- Para agrupar ações do mesmo usuário
  constraint analytics_events_pkey primary key (id)
);

-- Tabela para visitas (Sessões)
create table public.site_visits (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  source text null, -- utm_source, referrer
  device_type text null, -- mobile, desktop
  country text null,
  session_id text not null,
  constraint site_visits_pkey primary key (id)
);

-- Habilitar RLS
alter table public.analytics_events enable row level security;
alter table public.site_visits enable row level security;

-- Políticas de inserção pública (qualquer um pode logar eventos)
create policy "Permitir inserção pública em Analytics" on public.analytics_events for insert to anon with check (true);
create policy "Permitir inserção pública em Visitas" on public.site_visits for insert to anon with check (true);

-- Políticas de leitura admin
create policy "Permitir leitura admin em Analytics" on public.analytics_events for select to authenticated using (true);
create policy "Permitir leitura admin em Visitas" on public.site_visits for select to authenticated using (true);
