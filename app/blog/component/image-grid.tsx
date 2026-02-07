import Image from "next/image";

const images = [
  { src: "/images/img1.jpg", className: "lg:row-span-2" },
  { src: "/images/img2.jpg" },
  { src: "/images/img3.jpg" },
  { src: "/images/img4.jpg" },
  { src: "/images/img5.jpg", className: "lg:col-span-2" },
];

export default function ImageGrid() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-6 lg:mt-0 lg:grid-cols-3">
      {images.map((img, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-2xl ${img.className ?? ""}`}
        >
          <Image
            src={img.src}
            alt="People collaborating"
            width={500}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
