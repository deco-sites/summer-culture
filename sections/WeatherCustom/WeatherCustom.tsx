import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature?: Temperature | null;
}

export default function WeatherCustom({ temperature }: Props) {
  return (
    <>
      <div class="fixed bg-white z-20 bottom-8 right-4 rounded-3xl border px-4 h-10 flex items-center justify-center">
        <p>
          RJ{' '} 
          {temperature && temperature?.celsius}°
        </p>
      </div>
    </>
  );
}
