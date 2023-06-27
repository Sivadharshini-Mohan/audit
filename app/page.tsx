"use client";
import Header from "@components/Header";
import MainLayout from "@components/MainLayout";
import { QUERY_CONST } from "@constant/appConstant";
import { QueryClient, QueryClientProvider } from "react-query";

const Home = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        ...QUERY_CONST,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <MainLayout />
      </div>
    </QueryClientProvider>
  );
};

export default Home;
