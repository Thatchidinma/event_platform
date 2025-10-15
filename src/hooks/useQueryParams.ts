import { useLocation, useSearchParams, useNavigate } from "react-router";

export default function useQueryParams() {
  const router = useNavigate()
  const location = useLocation();
  const [searchParams] = useSearchParams(); 

  const get = (key: string) => {
    return searchParams.get(key);
  };

  const set = (data: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return { get, set, literal: searchParams.toString() };
}
