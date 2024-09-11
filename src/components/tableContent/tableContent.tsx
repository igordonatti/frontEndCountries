'use client'

import { useApi } from "@/hooks/api/useApi";
import Link from "next/link";
import { useEffect, useState } from "react"

interface CountriesProps {
  countryCode: string;
  name: string;
}

export default function TableContent () {
  const [countries, setCountries] = useState<CountriesProps[] | null>([]);
  const api = useApi();

  useEffect(() => {
    const getCountries = async () => {
      const response = await api.getAllCountries();
      if(response) {
        console.log(response);

        setCountries(response);
      }
    }

    getCountries();
    console.log(countries);
  })

  return (
    <div className="w-full pl-3 h-full gap-2 flex flex-col">
      {
        countries?.map((country, index) => {
          return (
            <div className="cursor-pointer text-lg p-3 text-white" key={index}>
              <Link href={`/${country.countryCode}?search=${country.countryCode}`}>
                {country.name}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}