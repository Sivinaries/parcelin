import team1 from "../../assets/images/team/team1.png";
import team2 from "../../assets/images/team/team2.jpg";
import team3 from "../../assets/images/team/team3.png";
import team4 from "../../assets/images/team/team4.jpg";
import team5 from "../../assets/images/team/team5.jpg";

export default function Team() {
  return (
    <div className="flex items-center justify-center md:p-12 bg-white mx-auto w-screen-lg md:h-screen">
      <div className="flex flex-col gap-y-4 h-full">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold md:mb-8">Tim Kami</h1>
        </div>

        <div className="md:hidden flex flex-col items-center justify-center px-4 text-justify gap-y-8">
          <div className="h-auto">
            <p className="text-sm">
              Di Parcelinpack, kami percaya bahwa kemasan terbaik lahir dari
              kolaborasi para ahli. Tim kami terdiri dari tenaga profesional
              yang berpengalaman, kreatif, dan berdedikasi, siap membantu
              menciptakan packaging yang sesuai dengan kebutuhan bisnis Anda.
              Dari konsultasi hingga produksi, kami hadir untuk memastikan
              kualitas terbaik di setiap tahap proses.
            </p>
          </div>
          <div className="w-full flex flex-col gap-1">
            <div className="flex h-36 gap-1">
              <div
                className="w-2/5 h-full bg-gray-900"
                style={{
                  background: `url(${team2}) no-repeat center center / cover`,
                }}
              ></div>
              <div
                className="w-1/5 h-full bg-gray-900"
                style={{
                  background: `url(${team3}) no-repeat center center / cover`,
                }}
              ></div>
              <div
                className="w-2/5 h-full bg-gray-900"
                style={{
                  background: `url(${team1}) no-repeat center center / cover`,
                }}
              ></div>
            </div>
            <div className="h-36 flex gap-1">
              <div
                className="w-2/3 h-full"
                style={{
                  background: `url(${team4}) no-repeat center center / cover`,
                }}
              ></div>
              <div
                className="w-1/3 h-full"
                style={{
                  background: `url(${team5}) no-repeat center center / cover`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-2 h-full">
          <div className="w-3/4 flex flex-col gap-2">
            <div className="h-1/2 flex gap-2">
              <div className="w-2/5 h-full">
                <p className="text-2xl">
                  Di Parcelinpack, kami percaya bahwa kemasan terbaik lahir dari
                  kolaborasi para ahli. Tim kami terdiri dari tenaga profesional
                  yang berpengalaman, kreatif, dan berdedikasi, siap membantu
                  menciptakan packaging yang sesuai dengan kebutuhan bisnis
                  Anda. Dari konsultasi hingga produksi, kami hadir untuk
                  memastikan kualitas terbaik di setiap tahap proses.
                </p>
              </div>
              <div
                className="w-2/5 h-full"
                style={{
                  background: `url(${team2}) no-repeat center center / cover`,
                }}
              ></div>
              <div
                className="w-1/5 h-full"
                style={{
                  background: `url(${team3}) no-repeat center center / cover`,
                }}
              ></div>
            </div>
            <div className="h-1/2 flex gap-2">
              <div
                className="w-2/3 h-full"
                style={{
                  background: `url(${team4}) no-repeat center center / cover`,
                }}
              ></div>
              <div
                className="w-1/3 h-full"
                style={{
                  background: `url(${team5}) no-repeat center center / cover`,
                }}
              ></div>
            </div>
          </div>
          <div
            className="w-1/4 h-full"
            style={{
              background: `url(${team1}) no-repeat center center / cover`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
