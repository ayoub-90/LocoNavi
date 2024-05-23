import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { Img, Text, Heading, Button, SelectBox } from "../../components";
import DesktopOneTemplateiphone from "../../components/DesktopOneTemplateiphone";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DesktopOnePage() {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <Helmet>
        <title>home page</title>
      </Helmet>

      <div className="flex flex-row justify-center pb-5 bg-white-A700 lg:w-full md:w-full sm:w-full sm:text-[14px] sm:font-semibold">
        <div className="flex flex-col items-center justify-center w-full sm:w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="h-[512px] w-full relative ">
                <Img
                  src="images/img_rectangle_2.png"
                  alt="image"
                  className="justify-center h-[512px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute md:full sm:w-full"
                />
                <header className="flex justify-center items-center w-[1200px] top-[4%] right-0 left-0 p-1.5 m-auto bg-gradient shadow-sm absolute rounded-[15px] custom-header px-10 lg:w-full md:w-full sm:w-full sm:justify-center ">
                  <div className="flex flex-row justify-center w-full ml-[0px] max-w-[1279px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <Img
                        src="images/img_pngtree_creative.png"
                        alt="pngtree_one"
                        className="w-[15%] object-cover"
                      />
                      <div className="flex flex-row justify-start gap-[30px]">
                        <Img
                          src="images/img_3_bold_user.svg"
                          alt="3bolduser_one"
                          className="h-10 w-10"
                        />
                        <Img
                          src="images/img_3_bold_menu.svg"
                          alt="3boldmenu_one"
                          className="h-10 w-10"
                        />
                      </div>
                    </div>
                  </div>
                </header>
              </div>
              <div className="flex flex-row justify-center w-full mt-[-120px] p-[18px] z-10 bg-white-A700 shadow-xs max-w-[1160px] rounded-[15px] sm:flex sm:flex-col sm:justify-center">
                <div className="flex flex-col justify-center items-center w-[94%] mt-5 mx-[33px] sm:flex-col sm:justify-center">
                  <div className="flex flex-row justify-center gap-10 w-full sm:flex sm:flex-col sm:w-full sm:gap-10">
                    <div className="flex flex-col justify-start w-full">
                      <Text as="p" className="mt-0.5">
                        Gare de départ
                      </Text>
                      <SelectBox
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        name="garededpart_one"
                        placeholder="Gare de départ"
                        options={dropDownOptions}
                        className="w-[353px] gap-px font-medium mt-3"
                      />
                    </div>
                    {/* <div className="justify-start">
                      <Img
                        src="images/img_mage_exchange_a.svg"
                        alt="mageexchangea"
                        className="h-8 w-8 mt-4"
                      />
                    </div> */}
                    <div className="flex flex-col justify start w-full">
                      <Text as="p" className="mt-0.5">
                        Gare d'arrivée
                      </Text>
                      <SelectBox
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        name="garedarrive_one"
                        placeholder="Gare d’arrivée"
                        options={dropDownOptions}
                        className="w-[353px] gap-px font-medium mt-3"
                      />
                    </div>
                    <div>
                      <Button
                        leftIcon={
                          <Img src="images/img_search.svg" alt="search" />
                        }
                        className="Adherent w-[163px] mt-[27px]"
                      >
                        Chercher
                      </Button>
                    </div>
                  </div>
                  <div className="mt-[40px] h-[1.5px] bg-black-900 items-center opacity-5 w-[1000px]"></div>
                  {/* card Direct begin */}
                  <a href onClick={toggleShowMore}>
                    <div className="items-center justify-ecnter px-16 pt-4 pb-6 mt-10 max-w-full rounded-3xl shadow-lg bg-blue-500 bg-opacity-10 w-[1012px]">
                      <div className="flex flex-col">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[180px] max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-5 mt-2.5 text-2xl font-bold text-black max-md:mt-10">
                              <div className="flex-auto my-auto mt-[20px]">
                                Train N°1
                              </div>
                              <div className="items-center shrink-0 w-1 border-2 border-solid bg-cyan-600 bg-opacity-30 border-cyan-600 border-opacity-30 h-[66px]" />
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                              <div className="flex flex-row gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                <div
                                  className={`flex flex-col gap-1 ${
                                    showMore ? "hidden" : "block"
                                  }`}
                                >
                                  <div className="flex justify-center items-center gap-1 ml-[30px] ">
                                    <div className="shrink-0 mt-6 rounded-full border border-blue-500 border-solid h-[11px] stroke-[1px] w-[11px]" />
                                    <div className="shrink-0 mt-6 w-2 h-2 bg-blue-500 rounded-full" />
                                    <div className="shrink-0 mt-6 w-2 h-2 bg-blue-500 rounded-full" />
                                    <div className="shrink-0 mt-6 w-2 h-2 bg-blue-500 rounded-full" />
                                    <div className="shrink-0 mt-6 w-2 h-2 bg-blue-500 rounded-full" />
                                    <div className="shrink-0 mt-6 w-2 h-2 bg-blue-500 rounded-full" />
                                    <div className="shrink-0 mt-6 w-2 h-2 bg-blue-500 rounded-full" />
                                    <div className="shrink-0 mt-6 w-2 h-2 bg-blue-500 rounded-full" />
                                    <div className="shrink-0 mt-6 w-2 h-2 bg-blue-500 rounded-full" />
                                    <img
                                      src="images/bx_map.svg"
                                      alt="localisation"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-20">
                                    <div className="flex flex-col gap-0.5 items-center ">
                                      <div className="font-semibold text-black text-xl">
                                        16:35
                                      </div>
                                      <div className="font-semibold text-gray-600 text-px-10">
                                        Départ
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-0.5 items-center ">
                                      <div className="font-semibold text-black text-xl">
                                        17:29
                                      </div>
                                      <div className="font-semibold text-gray-600 text-px-10">
                                        Arrivée
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col absolute mt-[10px] ml-[530px] justify-center items-center gap-3">
                                  <div className="text-xl font-semibold text-black">
                                    Itinéraire
                                  </div>
                                  <div className="flex items-center gap-2 text-lg font-bold text-emerald-500 whitespace-nowrap">
                                    <div className="shrink-0 w-3.5 h-3.5 bg-emerald-500 rounded-full" />
                                    <div>Direct</div>
                                  </div>
                                  <div className="flex items-center gap-2 text-lg font-bold text-blue-500 whitespace-nowrap">
                                    <div className="shrink-0 w-3.5 h-3.5 bg-blue-500 rounded-full" />
                                    <div>correspondance</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* show more toggle */}
                        {showMore && (
                          <div className="font-semibold text-zinc-500 pl-[170px]">
                            <div className="flex first-letter mt-[-34px] absolut flex-col items-start justify-center ml-[30px] gap-1">
                              {/* gare de départ */}
                              <div className="flex flex-row gap-6 w-[230px]">
                                <div className="flex flex-col gap-0.5 items-center ">
                                  <div className="font-semibold text-black text-sm">
                                    17:29
                                  </div>
                                  <div className="font-semibold text-gray-600 text-sm">
                                    Départ
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1 justify-center items-center">
                                  <img
                                    src="images/bx_map.svg"
                                    alt="localisation"
                                    className="sticky-image"
                                  />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                </div>
                                <div>CASA PORT</div>
                              </div>
                              {/* end gare de départ */}
                              {/* gare d'arret */}
                              <div className="flex flex-row items-start gap-6 w-[230px]">
                                <div className="flex flex-col gap-0.5 items-center ">
                                  <div className="font-semibold text-black text-sm">
                                    17:29
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1 justify-center items-center pl-[21px]">
                                  <div className="shrink-0 rounded-full border border-blue-500 border-solid h-[11px] stroke-[1px] w-[11px]" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                </div>
                                <div className="mt-[-5px]">RABAT AGDAL</div>
                              </div>

                              {/* end gare d'arret */}
                              {/* gare de correspondance */}
                              <div className="flex flex-row items-start gap-2 w-[290px]">
                                <div className="flex flex-col gap-0.5 items-center ">
                                  <div className="font-semibold text-black text-sm">
                                    17:29
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1 justify-center items-center pl-[37px]">
                                  <div className="shrink-0 rounded-full border border-blue-500 border-solid h-[11px] stroke-[1px] w-[11px]" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                </div>
                                <img
                                  src="images/icon-park-outline_exchange.svg"
                                  alt="Correspondance"
                                  className=" w-[15px]"
                                />
                                <div className="mt-[-5px]">RABAT AGDAL</div>
                              </div>
                              {/* end gare de correspondance */}
                              {/* gare d'arrivée */}
                              <div className="flex flex-row items-end gap-6 w-[250px]">
                                <div className="flex flex-col gap-0.5 items-center justify-end">
                                  <div className="font-semibold text-black text-sm">
                                    17:29
                                  </div>
                                  <div className="font-semibold text-gray-600 text-sm">
                                    Arrivée
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1 justify-center items-center pl-[8px]">
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                                  <div className="shrink-0 rounded-full border border-blue-500 border-solid h-[11px] stroke-[1px] w-[11px]" />
                                </div>
                                <div className="pl-[12px]">RABAT AGDAL</div>
                              </div>
                              {/* end gare d'arrivée */}
                            </div>
                            <div className="flex flex-col absolut w-[100px] mt-[-50px] ml-[640px] items-center text-xl font-bold text-black">
                              <img
                                alt="clock"
                                src="images/mdi_clock-outline.svg"
                                className="h-[34px]"
                              />
                              <div className="text-xl font-bold text-black">
                                1h 00min
                              </div>
                            </div>
                          </div>
                        )}
                        {/* end show more */}
                      </div>
                    </div>
                  </a>
                  {/* card Direct end */}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[725px] w-full relative max-w-[1357px]">
            <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-col items-center justify-start w-[32%] mr-[149px] z-[1]">
                <div className="flex flex-col items-center justify-start w-full">
                  <DesktopOneTemplateiphone />
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[-36px] p-[13px] bg-gradient shadow-sm rounded-[15px] h-[100px]">
                <div className="flex flex-row justify-start items-center w-[55%] mb-3.5 ml-[239px]">
                  <Img
                    src="images/img_pngtree_creative.png"
                    alt="pngtree_three"
                    className="w-[18%] z-[1] object-cover"
                  />
                  <Heading as="h1" className="ml-[-2px] text-sm">
                    © 2019 LocoNavi - TOUS DROITS RÉSERVÉS - Version 1.0.0
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[47%] left-[7%] top-[15%] m-auto absolute">
              <Text size="s" as="p" className="!text-black-900">
                <span className="text-black-900">Découvrez </span>
                <span className="text-teal_300 font-bold">LocoNavi</span>
              </Text>
              <Text size="s" as="p" className="mt-[13px] !text-black-900">
                Explorez, Réservez, Voyagez.
              </Text>
              <div className="flex flex-row justify-start mt-[30px] gap-6">
                <Img
                  src="images/img_appstore.svg"
                  alt="appstore_one"
                  className="h-[52px]"
                />
                <Img
                  src="images/img_googleplay.png"
                  alt="googleplay_one"
                  className="w-[32%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
