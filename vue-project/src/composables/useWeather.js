import { useWeatherStore } from "../stores/weatherStore";
import { getTemperatutra } from "../helpers/getWeather";

export const useWeather = async () => {
    const temperatura = await getTemperatutra();
    const weatherStore = useWeatherStore();
    weatherStore.temperatura = temperatura;
}