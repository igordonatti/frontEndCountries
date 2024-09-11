'use client'

import { useApi } from "@/hooks/api/useApi"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PopulationChart from "../Chart/populationChart";

interface InfoContentProps { 
  code: string;
}

interface CountryInfo {
  countryInformation: CountryInformation;
  flag: string;
  populationData: Array<PopulationInfo>;
}

interface PopulationInfo {
  code: string;
  country: string;
  populationsCounts: Array<Count>;
}

interface Count {
  year: number;
  value: number;
}

interface CountryInformation {
  borders: Array<null | CountryInformation>;
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

export default function InfoContent ({ code }: InfoContentProps) {
  const api = useApi();
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
  const [populationCount, setPopulationCount] = useState<Array<Count> | null>(null);

  useEffect(() => {
    const getCountryInfo = async () => {
      const response = await api.getInfoCountry(code)
      if (response) {
        setCountryInfo(response)
        setPopulationCount(response.populationData[0].populationCounts)
      }
    };

    getCountryInfo();
  })


  return (
    <div
    className="w-full h-full flex flex-col items-center">
      {
        countryInfo && (
          <div className="w-full h-full flex flex-col items-center">
            <h1 className="p-4 text-2xl">{countryInfo?.countryInformation.officialName}</h1>
            <Image src={countryInfo.flag} alt="Flag of the Country" width={160} height={260}/>
            <p className="p-4">Borders: </p>
            {
              countryInfo.countryInformation.borders.map((border, index) => 
              <Link key={index} href={`/${border?.countryCode}?search=${border?.countryCode}`}>
                <p className="pointer" >{border?.officialName}</p>  
              </Link>
            )}
            {countryInfo.populationData.length > 0 && (
              <PopulationChart populationCounts={populationCount || []} />
            )}
          </div>
        )
      }

    </div>
  )
}