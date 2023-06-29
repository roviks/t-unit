import { observer } from "mobx-react";
import { useEffect, useRef } from "react";
import { PhotoCard } from "../../entities/photo";
import { Loader } from "../../shared/ui";
import { model } from "./model";

const PhotosList = observer(() => {
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observerRefValue: HTMLDivElement | null = null;
    if (!observerTarget.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          model.loadMore();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(observerTarget.current);
    observerRefValue = observerTarget.current;

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [observerTarget]);

  if (model.error) {
    return <h1>{model.error}</h1>;
  }

  return (
    <div>
      <div className="photos-list">
        {model.photos.map((item, index) => (
          <PhotoCard key={index} url={item.url} title={item.title} />
        ))}
      </div>
      {model.isLoading && (
        <div className="text-center">
          <Loader />
        </div>
      )}

      <div ref={observerTarget} />
    </div>
  );
});

export { PhotosList };
