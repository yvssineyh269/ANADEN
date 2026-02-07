import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogId() {
  return (
    <div className="bg-gray-800 text-gray-50">
      <div className="container grid grid-cols-12 mx-auto">
        <div
          className="flex flex-col justify-center col-span-12 align-middle bg-gray-700 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1769650796145-30df10357926?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col items-center p-8 py-12 text-center text-gray-100">
            <span>12 June</span>
            <h1 className="py-4 text-5xl font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
            </p>
            <ArrowRight />
          </div>
        </div>

        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
          <div className="pt-6 pb-4 space-y-2">
            <span>12 June</span>
            <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              repudiandae corporis, earum laudantium totam, nulla alias nam
              libero tenetur dignissimos porro hic magni nobis quibusdam magnam
              facilis dolores natus ut? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo numquam consectetur nesciunt ex
              voluptate voluptates facilis, tempore inventore odit. Accusantium
              alias voluptate cum esse aspernatur modi nam reiciendis
              voluptatibus debitis. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ipsam obcaecati sit rerum! Sit atque maiores a
              placeat doloribus id animi quia dolorem nobis voluptates mollitia
              ex exercitationem quos, vitae delectus!s
            </p>
          </div>

          <div className="pt-6 pb-4 space-y-2">
            <span>12 June</span>
            <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400"
            >
              <span>Read more</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
