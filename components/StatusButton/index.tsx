import { cn } from "../../lib/cn";

type Data = {
  page: {
    id: string;
    name: string;
    url: string;
    time_zone: string;
    updated_at: string;
  };
  components: [
    {
      id: string;
      name: string;
      status: string;
      created_at: string;
      updated_at: string;
      position: number;
      description: string | null;
      showcase: boolean;
      start_date: string;
      group_id: null;
      page_id: string;
      group: boolean;
      only_show_if_degraded: boolean;
    }
  ];
  incidents: [];
  scheduled_maintenances: [];
  status: {
    indicator: string;
    description: string;
  };
};

export const StatusButton = ({ statusData }: { statusData: Data }) => {
  let indicator = "";

  /*
    Status Colors 
  */
  switch (statusData.status.indicator) {
    case "none":
      indicator = "bg-green-500";
      break;
    case "operational":
      indicator = "bg-green-500";
      break;
    case "minor":
      indicator = "bg-yellow-500";
      break;
    case "major":
      indicator = "bg-red-500";
      break;
    case "critical":
      indicator = "bg-red-500";
      break;
    case "maintenance":
      indicator = "bg-yellow-500";
      break;
    default:
      indicator = "bg-gray-500";
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-[6px]">
      <a
        href={statusData.page.url}
        target="_blank"
        rel="noreferrer"
        aria-label="cloud status"
        className="flex items-center px-2 py-1 rounded-lg"
      >
        <span
          className={cn("inline-block w-3 h-3 mr-2 rounded-full", indicator)}
        ></span>
        <span className="text-sm text-berry-700 hover:text-berry-900 dark:text-gray-300">
          {statusData.status.description}
        </span>
      </a>
    </div>
  );
};
