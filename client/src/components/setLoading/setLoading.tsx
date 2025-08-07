'use client';
import { useState, useEffect } from "react";
import { Loading } from "../loading/loading";

const SetLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
};

export default SetLoading;