'use client'
import InfoContent from "@/components/infoContent/infoContent";
// https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes <- sobre rotas dinâmicas

import { useSearchParams } from "next/navigation"

export default function CountryInfo() {
  const searchParam = useSearchParams();
  
  const search = searchParam.get('search')

  console.log(search)

  return (
    <main className="h-full w-full flex flex-col items-center">
      {
        search ? <InfoContent code={search} /> : ''
      }
    </main>
  )
}