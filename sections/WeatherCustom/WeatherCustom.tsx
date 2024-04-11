import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature?: Temperature | null;
}

export default function WeatherCustom({ temperature }: Props) {
  return (
    <>
      <div>
        {temperature && <p>{temperature?.celsius} graus</p>}
      </div>
    </>
  );
}