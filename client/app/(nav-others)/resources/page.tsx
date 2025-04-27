"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./resources.module.css";

// Imported image assets
import background from "../../../public/resources/background.svg";
import folder_icon from "../../../public/resources/folder-icon.svg";
import CHEM_Flowchart from "../../../public/resources/CHEM_Flowchart.png";
import CHEM_Flowchart_Applied from "../../../public/resources/CHEM_Flowchart_Applied.png";

const TABS = ["FlowChart", "Courses", "Extra Material"];

const courseLinks = [
  {
    name: "CHEM 101",
    url: "https://drive.google.com/drive/folders/1OIFeqHlftTiOrPnQJ10PeVWt74SJggXk",
  },
  {
    name: "CHEM 102",
    url: "https://drive.google.com/drive/folders/1GZSYYydVp35lzOq7Kb4LEv0_QGFp10If",
  },
  {
    name: "MATH 101",
    url: "https://drive.google.com/drive/folders/1cMatWND7RTeDS7u65aB-TnCSJmQX02gB",
  },
  {
    name: "MATH 102",
    url: "https://drive.google.com/drive/folders/1S-ms9Ldad4QDpmokEGG0u108BHPOEU3Y",
  },
  {
    name: "PHYS 101",
    url: "https://drive.google.com/drive/folders/1GrRCLfCpgbahQAmm4A6d-ZtFKTS9S1R-",
  },
  {
    name: "PHYS 102",
    url: "https://drive.google.com/drive/folders/16jrm0P9OPZD-NTJPw4c6Y6Si_0_ua4vl",
  },
  {
    name: "CHE 200",
    url: "https://drive.google.com/drive/folders/1XQGWnV5XCGzSTkSRZo6Fdazd22Rkg6Zb",
  },
  {
    name: "CHE 204",
    url: "https://drive.google.com/drive/folders/13pLI6F-CfX8wCacNak0KiQmG4kXQhHae",
  },
  {
    name: "CHE 212",
    url: "https://drive.google.com/drive/folders/15tUcugsQ7hdE-adGuB93TRsUGEB40VGE",
  },
  {
    name: "CHEM 201",
    url: "https://drive.google.com/drive/folders/1nLuRP_bBhsB9RQFx0_2I4ndvJ6Dvh04n",
  },
  {
    name: "CHEM 202",
    url: "https://drive.google.com/drive/folders/19Y6p0W9veCd7QS4n247NeLKeqAdmHxU2",
  },
  {
    name: "MATH 201",
    url: "https://drive.google.com/drive/folders/1CoFTqhXNmgMaLF42-78s40vS7_Mzuict",
  },
  {
    name: "ME 207",
    url: "https://drive.google.com/drive/folders/139T3yDJCkpXTikBw6XGEyyVPeD2a1dwv",
  },
  {
    name: "CHE 300",
    url: "https://drive.google.com/drive/folders/1022dbAXsfHU2TfhfTYx_JdlB6WVGlaRI",
  },
  {
    name: "CHE 303",
    url: "https://drive.google.com/drive/folders/1UHdtVsTPwZqmYFM3cB2HiiFHtJrDtnN2",
  },
  {
    name: "CHE 304",
    url: "https://drive.google.com/drive/folders/1NjYKkucGLy4wyYgewb129J7N_4Df0fTG",
  },
  {
    name: "CHE 306",
    url: "https://drive.google.com/drive/folders/1zhZIHf2BKMAZU41oGHqjX2-LVOwp55BS",
  },
  {
    name: "CHE 309",
    url: "https://drive.google.com/drive/folders/1yqHXe_GBXCadBwRuGZ82R5AwyxmbnJVm",
  },
  {
    name: "CHE 360",
    url: "https://drive.google.com/drive/folders/1Z_8vwTJQf74tI15JkoWVeuNlnqvMqL0X",
  },
  {
    name: "CHEM 311",
    url: "https://drive.google.com/drive/folders/1zgqLo3KRaXFIUq7hrrFYz3I0LTrrO9Xp",
  },
  {
    name: "CHEM 312",
    url: "https://drive.google.com/drive/folders/1y5gC37cDKs7ERsaWxEACiXcYNU73TVA_",
  },
  {
    name: "STAT 319",
    url: "https://drive.google.com/drive/folders/1yhqHzRJpFqImrZ1j9nRhsJvP8IlMLnJP",
  },
  {
    name: "CHE 401",
    url: "https://drive.google.com/drive/folders/1-vJjeTJ9RiytaRr7MNnibi1lnw9MW6UY",
  },
  {
    name: "CHE 402",
    url: "https://drive.google.com/drive/folders/19SGdjF2E8PS1H6Q3jRHFWGRUHI_rfPP7",
  },
  {
    name: "CHE 405",
    url: "https://drive.google.com/drive/folders/1kYQz3UXlnZmG5x6-5rXDqaex_XqZRT6i",
  },
  {
    name: "CHE 409",
    url: "https://drive.google.com/drive/folders/16rXPdPuJq7sX0IjOxs13zuU-1S-xo9YI",
  },
  {
    name: "CHE 411/412",
    url: "https://drive.google.com/drive/folders/17wqqSuD5k331iv8_21Bngr89DkgUnB1n",
  },
  {
    name: "CHE 432",
    url: "https://drive.google.com/drive/folders/1ssKsE2Eth8L9xN-OB2p4H98FPj9KVgOJ",
  },
  {
    name: "CHE 440",
    url: "https://drive.google.com/drive/folders/1D9ylfzq2rLQLHhDoC_SJo68sx07v5WlV",
  },
  {
    name: "CHE 444",
    url: "https://drive.google.com/drive/folders/1p74o_ukVpuURi5d7FsbxElJRVueTAJOX",
  },
  {
    name: "CHE 463",
    url: "https://drive.google.com/drive/folders/1dU5WjNvGotLZ9Ih5qTavePadxRwtqG6j",
  },
  {
    name: "CHE 473",
    url: "https://drive.google.com/drive/folders/1YeN7ADg4KjtM_LW1e3TugMbNtWXkQfm1",
  },
  {
    name: "ECON 475",
    url: "https://drive.google.com/drive/folders/1VTQ-2CUMbZaiR8u80YPmMkQtam6wKkJq",
  },
  {
    name: "ME 453",
    url: "https://drive.google.com/drive/folders/1PX2ZWUhtRdjvtoWyvhjMIOVv2r9TkOCO",
  },
];

const Resources = () => {
  const [selectedTab, setSelectedTab] = useState("FlowChart");
  const [fadeKey, setFadeKey] = useState(0);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    setFadeKey((prev) => prev + 1);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "FlowChart":
        return (
          <div className={styles.flowchartImageContainer}>
            <div className={styles.flowchartSection}>
              <h3 className={styles.flowchartTitle}>
                General Chemical Engineering Flowchart
              </h3>
              <Image
                src={CHEM_Flowchart}
                alt="General CHEM Flowchart"
                className={styles.flowchartImage}
                placeholder="blur"
              />
            </div>
            <div className={styles.flowchartSection}>
              <h3 className={styles.flowchartTitle}>
                Applied Chemical Engineering Flowchart
              </h3>
              <Image
                src={CHEM_Flowchart_Applied}
                alt="Applied CHEM Flowchart"
                className={styles.flowchartImage}
                placeholder="blur"
              />
            </div>
          </div>
        );

      case "Courses":
        return (
          <div className={styles.cardsWrapper}>
            {courseLinks.map((course, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>
                  <Image src={folder_icon} alt="Icon" width={50} height={50} />
                </div>
                <h3 className={styles.cardTitle}>{course.name}</h3>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardButton}
                >
                  View Materials →
                </a>
              </div>
            ))}
          </div>
        );

      case "Extra Material":
        return (
          <div className={styles.extraMaterialWrapper}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src={folder_icon} alt="Icon" width={50} height={50} />
              </div>
              <h3 className={styles.cardTitle}>Concentrations (CX)</h3>
              <a
                href="https://ugc.production.linktr.ee/f46762b4-d313-403d-98c5-f285ad75fea3_All-CHE-CXs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardButton}
              >
                View PDF →
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top 15rem left",
        backgroundSize: "contain",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div className={styles.tabLinks}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabLink} ${
              selectedTab === tab ? styles.selected : ""
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div key={fadeKey} className={styles.tabContentFade}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Resources;
