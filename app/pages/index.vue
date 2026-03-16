<script setup lang="ts">
useSeoMeta({
  title: 'Apyra Digital — Consultoria de Mídia Programática e Performance',
  ogTitle: 'Apyra Digital — Consultoria de Mídia Programática e Performance',
  description: 'Expertise de grande agência para escalar seu lucro. Gestão estratégica de tráfego, consultoria de marketing, auditoria técnica de campanhas e performance baseada em dados com foco em ROI e lucratividade.',
  ogDescription: 'Gestão estratégica, auditoria técnica e performance baseada em dados. Especialistas com +10 anos em grandes agências e orçamentos multimilionários.',
})

interface Service {
  title: string
  description: string
  icon: string
  delay: string
}

const services: Service[] = [
  {
    title: 'Gestão de Tráfego',
    description:
      'Configuração otimizada em Google Ads, Meta Ads e Programática com foco em redução de CPA e aumento de ROI.',
    icon: '🚀',
    delay: 'delay-100',
  },
  {
    title: 'Consultoria de Marketing',
    description:
      'Estruturação completa do funil de vendas, análise de KPIs e roadmap claro para expansão.',
    icon: '📊',
    delay: 'delay-200',
  },
  {
    title: 'Auditoria de Campanhas',
    description:
      'Verificação de rastreamento (Pixel/API), qualidade de públicos e plano de ação prático.',
    icon: '🔍',
    delay: 'delay-300',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection />

    <!-- Services Grid -->
    <section id="servicos" class="py-24 md:py-32 relative">
      <!-- Background accent -->
      <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 rounded-full glass text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Serviços
          </span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Soluções que geram
            <span class="text-gradient">resultado real.</span>
          </h2>
          <p class="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Foco total em ROI, lucratividade e retorno real — indo além de métricas superficiais como cliques.
          </p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            :delay="service.delay"
          />
        </div>

        <!-- DV360 Highlight -->
        <div class="mt-16 p-6 md:p-8 rounded-2xl glass glow-border text-center max-w-3xl mx-auto animate-fade-in-up opacity-0 delay-400">
          <div class="flex items-center justify-center gap-2 mb-3">
            <span class="text-2xl">⚡</span>
            <h3 class="text-lg md:text-xl font-bold text-white">Expertise em DV360</h3>
          </div>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed">
            Domínio de <span class="text-primary font-semibold">Display & Video 360</span>, a plataforma programática
            mais sofisticada do Google, garantindo que o básico (Search e Social) seja executado
            com <span class="text-white font-medium">perfeição.</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <ComparisonTable />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>
