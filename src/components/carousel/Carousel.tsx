"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import CarouselButton from "./CarouselButton";
import useInterval from "@/hooks/useInterval";
import useWindowSize from "@/hooks/useWindowSize";
import AlterGrip from "../../../public/images/alter_grip.jpeg";

import "./carousel.css";

type Event = MouseEvent | TouchEvent;

const Carousel = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const items = [AlterGrip, AlterGrip, AlterGrip];
  const itemSize = items.length;
  const sliderPadding = 40;
  const sliderPaddingStyle = `0 ${sliderPadding}px`;
  const newItemWidth = getNewItemWidth();
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const ADD_SLIDE_EACH_SIDE = 2;
  const [currentIndex, setCurrentIndex] = useState(ADD_SLIDE_EACH_SIDE);
  const [slideTransition, setTransition] = useState(transitionStyle);
  const [isSwiping, setIsSwiping] = useState(false);
  const [slideX, setSlideX] = useState(0);
  const [prevSlideX, setPrevSlideX] = useState(0);
  let isResizing = useRef(false);

  let slides = setSlides();
  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < ADD_SLIDE_EACH_SIDE) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedLast];
  }

  function getNewItemWidth() {
    let itemWidth = windowWidth * 0.9 - sliderPadding * 2;
    itemWidth = itemWidth > 1060 ? 1060 : itemWidth;
    return itemWidth;
  }

  useEffect(() => {
    isResizing.current = true;
    setIsSwiping(true);
    setTransition("");
    setTimeout(() => {
      isResizing.current = false;
      if (!isResizing.current) setIsSwiping(false);
    }, 1000);
  }, [windowWidth]);

  useInterval(
    () => {
      handleSlide(currentIndex + 1);
    },
    !isSwiping && !prevSlideX ? 2000 : null
  );

  function replaceSlide(index: number) {
    setTimeout(() => {
      setTransition("");
      setCurrentIndex(index);
    }, transitionTime);
  }

  function handleSlide(index: number) {
    setCurrentIndex(index);
    if (index - ADD_SLIDE_EACH_SIDE < 0) {
      index += itemSize;
      replaceSlide(index);
    } else if (index - ADD_SLIDE_EACH_SIDE >= itemSize) {
      index -= itemSize;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  }

  function handleSwipe(direction: number) {
    setIsSwiping(true);
    handleSlide(currentIndex + direction);
  }

  function getItemIndex(index: number) {
    index -= ADD_SLIDE_EACH_SIDE;
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
  }

  function getClientX(event: any) {
    return event._reactName == "onTouchStart"
      ? event.touches[0].clientX
      : event._reactName == "onTouchMove" || event._reactName == "onTouchEnd"
      ? event.changedTouches[0].clientX
      : event.clientX;
  }

  function handleTouchStart(e: any) {
    setPrevSlideX(getClientX(e));
  }

  function handleTouchMove(e: any) {
    if (prevSlideX) {
      setSlideX(getClientX(e) - prevSlideX);
    }
  }

  function handleMouseSwipe(e: any) {
    if (slideX) {
      const currentTouchX = getClientX(e);
      if (prevSlideX > currentTouchX + 100) {
        handleSlide(currentIndex + 1);
      } else if (prevSlideX < currentTouchX - 100) {
        handleSlide(currentIndex - 1);
      }
      setSlideX(0);
    }
    setPrevSlideX(0);
  }

  return (
    <div className="slider-area">
      <div className="slider">
        <CarouselButton direction="left" onClick={() => handleSwipe(-1)} />
        <CarouselButton direction="right" onClick={() => handleSwipe(1)} />
        <div className="slider-list" style={{ padding: sliderPaddingStyle }}>
          <div
            className="slider-track"
            onMouseOver={() => setIsSwiping(true)}
            onMouseOut={() => setIsSwiping(false)}
            style={{
              transform: `translateX(calc(${
                (-100 / slides.length) * (0.5 + currentIndex)
              }% + ${slideX || 0}px))`,
              transition: slideTransition,
            }}
          >
            {slides.map((slide, slideIndex) => {
              const itemIndex = getItemIndex(slideIndex);
              return (
                <div
                  key={slideIndex}
                  className={`slider-item ${
                    currentIndex === slideIndex ? "current-slide" : ""
                  }`}
                  style={{ width: newItemWidth || "auto" }}
                  onMouseDown={handleTouchStart}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onMouseMove={handleTouchMove}
                  onMouseUp={handleMouseSwipe}
                  onTouchEnd={handleMouseSwipe}
                  onMouseLeave={handleMouseSwipe}
                >
                  <a>
                    <Image src={items[itemIndex]} alt={`banner${itemIndex}`} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
