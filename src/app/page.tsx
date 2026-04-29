import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "국세 법령 검색",
    description: "소득세, 법인세, 부가가치세 등 국세 관련 법령을 검색합니다.",
    icon: "🏛️",
  },
  {
    title: "지방세 법령 검색",
    description: "취득세, 재산세, 주민세 등 지방세 관련 법령을 검색합니다.",
    icon: "🏙️",
  },
  {
    title: "통합 검색",
    description: "여러 기관의 세법 자료를 한 번에 통합하여 검색합니다.",
    icon: "🔍",
  },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          세법 통합 검색 시스템
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          국세법령시스템 · 지방세법령센터를 하나의 창에서 빠르게 검색하세요.
          회계사를 위한 세무지식 검색 도구입니다.
        </p>
        <Button asChild size="lg">
          <Link href="/search">지금 검색하기</Link>
        </Button>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="text-3xl mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
