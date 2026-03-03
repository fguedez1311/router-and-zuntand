import { useNavigate,useLocation } from "react-router";
import { useCallback } from "react";

export function useRouter(){ 
  const navigate = useNavigate();
  const location = useLocation();

  // memoise the callback so its reference stays stable and
  // doesn't trigger effects that list it as a dependency.
  const navigateTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return {
    currentPath: location.pathname,
    navigateTo,
  };
}
