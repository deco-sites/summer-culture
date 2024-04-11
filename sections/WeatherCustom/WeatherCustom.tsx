import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature?: Temperature | null;
}

export default function WeatherCustom({ temperature }: Props) {
  return (
    <>
      <div>
        <p>Temperatura teste</p>
        {temperature && <p>{temperature?.celsius} graus</p>}
      </div>
    </>
  );
}
