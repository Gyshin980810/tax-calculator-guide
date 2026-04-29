import { Client } from "@notionhq/client";

if (!process.env.NOTION_API_KEY) {
  throw new Error("NOTION_API_KEY 환경 변수가 설정되지 않았습니다");
}

if (!process.env.NOTION_DATABASE_ID) {
  throw new Error("NOTION_DATABASE_ID 환경 변수가 설정되지 않았습니다");
}

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export interface TaxGuide {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  example: string;
  checklist: string;
  lastUpdated: string;
  status: "Published" | "Draft";
  order: number;
}

export async function getAllGuides(): Promise<TaxGuide[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Order",
          direction: "ascending",
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      category: page.properties.Category?.select?.name || "",
      description:
        page.properties.Description?.rich_text?.[0]?.plain_text || "",
      content: page.properties.Content?.rich_text?.[0]?.plain_text || "",
      example: page.properties.Example?.rich_text?.[0]?.plain_text || "",
      checklist: page.properties.Checklist?.rich_text?.[0]?.plain_text || "",
      lastUpdated: page.properties.LastUpdated?.date?.start || "",
      status: page.properties.Status?.select?.name || "Draft",
      order: page.properties.Order?.number || 0,
    }));
  } catch (error) {
    console.error("Notion 데이터 조회 오류:", error);
    throw error;
  }
}

export async function getGuideById(id: string): Promise<TaxGuide | null> {
  try {
    const page: any = await notion.pages.retrieve({
      page_id: id,
    });

    return {
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      category: page.properties.Category?.select?.name || "",
      description:
        page.properties.Description?.rich_text?.[0]?.plain_text || "",
      content: page.properties.Content?.rich_text?.[0]?.plain_text || "",
      example: page.properties.Example?.rich_text?.[0]?.plain_text || "",
      checklist: page.properties.Checklist?.rich_text?.[0]?.plain_text || "",
      lastUpdated: page.properties.LastUpdated?.date?.start || "",
      status: page.properties.Status?.select?.name || "Draft",
      order: page.properties.Order?.number || 0,
    };
  } catch (error) {
    console.error("Notion 페이지 조회 오류:", error);
    return null;
  }
}

export async function getGuidesByCategory(
  category: string
): Promise<TaxGuide[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          {
            property: "Category",
            select: {
              equals: category,
            },
          },
          {
            property: "Status",
            select: {
              equals: "Published",
            },
          },
        ],
      },
      sorts: [
        {
          property: "Order",
          direction: "ascending",
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      category: page.properties.Category?.select?.name || "",
      description:
        page.properties.Description?.rich_text?.[0]?.plain_text || "",
      content: page.properties.Content?.rich_text?.[0]?.plain_text || "",
      example: page.properties.Example?.rich_text?.[0]?.plain_text || "",
      checklist: page.properties.Checklist?.rich_text?.[0]?.plain_text || "",
      lastUpdated: page.properties.LastUpdated?.date?.start || "",
      status: page.properties.Status?.select?.name || "Draft",
      order: page.properties.Order?.number || 0,
    }));
  } catch (error) {
    console.error("카테고리별 가이드 조회 오류:", error);
    throw error;
  }
}

export async function searchGuides(query: string): Promise<TaxGuide[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          {
            or: [
              {
                property: "Title",
                title: {
                  contains: query,
                },
              },
              {
                property: "Description",
                rich_text: {
                  contains: query,
                },
              },
            ],
          },
          {
            property: "Status",
            select: {
              equals: "Published",
            },
          },
        ],
      },
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      category: page.properties.Category?.select?.name || "",
      description:
        page.properties.Description?.rich_text?.[0]?.plain_text || "",
      content: page.properties.Content?.rich_text?.[0]?.plain_text || "",
      example: page.properties.Example?.rich_text?.[0]?.plain_text || "",
      checklist: page.properties.Checklist?.rich_text?.[0]?.plain_text || "",
      lastUpdated: page.properties.LastUpdated?.date?.start || "",
      status: page.properties.Status?.select?.name || "Draft",
      order: page.properties.Order?.number || 0,
    }));
  } catch (error) {
    console.error("검색 오류:", error);
    throw error;
  }
}
