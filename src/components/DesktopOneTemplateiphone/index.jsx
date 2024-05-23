import React from "react";
import { Img } from "./..";

export default function DesktopOneTemplateiphone({ ...props }) {
  return (
    <div {...props}>
      <div className="h-[651px] w-full relative">
        <Img
          src="images/img_image.png"
          alt="image_two"
          className="h-[586px] w-[85%] right-[2%] bottom-0 top-0 m-auto opacity-0.6 object-cover absolute"
        />
        <div className="justify-center h-[651px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
          <Img
            src="images/img_image_651x429.png"
            alt="image_four"
            className="justify-center h-[651px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="h-[535px] w-[72%] right-[3%] top-[5%] m-auto absolute">
            <Img
              src="images/img_image.png"
              alt="image_six"
              className="justify-center h-[535px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.5 object-cover absolute"
            />
            <div className="flex flex-col items-center justify-start w-[66%] right-[14%] top-[8%] m-auto absolute">
              <div className="h-[410px] w-full relative">
                <Img
                  src="images/img_change_this_color.svg"
                  alt="changethis_one"
                  className="justify-center h-[410px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <div className="justify-center h-[410px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Img
                    src="images/img_phone_frame.png"
                    alt="image_seven"
                    className="justify-center h-[410px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_side_buttons.png"
                    alt="sidebuttons_one"
                    className="h-[98px] w-full top-[16%] right-0 left-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_holes.png"
                    alt="holes_one"
                    className="h-1 w-[18%] right-[38%] top-[3%] m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_screen.png"
                    alt="screen_one"
                    className="justify-center h-[390px] w-[90%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
