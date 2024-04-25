import { PageLayout } from "@/app/(components)/page-layout";

export default function NamePage({ params }: { params: { name: string } }) {
  const { name } = params;
  return <PageLayout heading={name} />;
}
