export const useAPI = () => {
  const config = useRuntimeConfig();
  return config.public.apiurl;
}