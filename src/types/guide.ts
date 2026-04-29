export type TaxCategory = "소득세" | "부가가치세" | "양도소득세" | "법인세";

export type GuideStatus = "Published" | "Draft";

export interface TaxGuide {
  id: string;
  title: string;
  category: TaxCategory;
  description: string;
  content: string;
  example: string;
  checklist: string;
  lastUpdated: string;
  status: GuideStatus;
  order: number;
}

export interface GuideCardProps {
  id: string;
  title: string;
  category: TaxCategory;
  description: string;
  lastUpdated: string;
}

export const TAX_CATEGORIES: Record<TaxCategory, string> = {
  소득세: "종합소득세, 근로소득세 등 개인 소득 관련 세금",
  부가가치세: "사업자 부가가치세 신고 및 계산 방법",
  양도소득세: "부동산 및 주식 양도에 따른 세금",
  법인세: "기업의 이익에 대한 세금",
};
