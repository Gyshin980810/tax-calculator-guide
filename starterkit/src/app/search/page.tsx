"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const searchSchema = z.object({
  keyword: z.string().min(2, { message: "검색어는 2자 이상 입력하세요." }),
  taxType: z.string({ error: "세금 종류를 선택하세요." }),
  memo: z.string().max(200, { message: "메모는 200자 이내로 입력하세요." }).optional(),
})

type SearchValues = z.infer<typeof searchSchema>

const TAX_TYPES = [
  { value: "income", label: "소득세" },
  { value: "corporate", label: "법인세" },
  { value: "vat", label: "부가가치세" },
  { value: "acquisition", label: "취득세" },
  { value: "property", label: "재산세" },
  { value: "local", label: "지방세 (기타)" },
]

export default function SearchPage() {
  const [result, setResult] = useState<SearchValues | null>(null)

  const form = useForm<SearchValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: { keyword: "", memo: "" },
  })

  function onSubmit(values: SearchValues) {
    setResult(values)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-2">세법 통합 검색</h1>
      <p className="text-muted-foreground mb-8">
        검색어와 세금 종류를 입력하면 관련 법령을 조회합니다.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>검색 조건 입력</CardTitle>
          <CardDescription>shadcn/ui Form + react-hook-form + zod 예제</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              {/* 검색어 필드 */}
              <FormField
                control={form.control}
                name="keyword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>검색어</FormLabel>
                    <FormControl>
                      <Input placeholder="예: 부가가치세 면세 범위" {...field} />
                    </FormControl>
                    <FormDescription>법령 키워드, 조항 번호 등을 입력하세요.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 세금 종류 선택 */}
              <FormField
                control={form.control}
                name="taxType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>세금 종류</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="세금 종류를 선택하세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TAX_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 메모 필드 */}
              <FormField
                control={form.control}
                name="memo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>메모 (선택)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="참고할 내용을 메모하세요..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>최대 200자</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">검색</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* 결과 표시 영역 */}
      {result && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>검색 결과 (예제)</CardTitle>
            <CardDescription>실제 API 연동 후 여기에 법령 결과가 표시됩니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div><span className="font-medium">검색어:</span> {result.keyword}</div>
            <div><span className="font-medium">세금 종류:</span> {TAX_TYPES.find(t => t.value === result.taxType)?.label}</div>
            {result.memo && <div><span className="font-medium">메모:</span> {result.memo}</div>}
            <p className="text-muted-foreground pt-2">
              ※ API 연동 완료 후 국세법령시스템 · 지방세법령센터 검색 결과가 여기에 나타납니다.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
