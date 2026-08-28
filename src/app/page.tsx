import { apiRequest } from "@/lib/api/client";
import { ApiConfigurationError } from "@/lib/api/config";

export const dynamic = "force-dynamic";

type BackendConnectionState =
  | "Connected"
  | "Unavailable"
  | "Configuration missing";

async function getBackendConnectionState(): Promise<BackendConnectionState> {
  try {
    await apiRequest<unknown>("/status", { cache: "no-store" });
    return "Connected";
  } catch (error) {
    if (error instanceof ApiConfigurationError) {
      console.error(error.message);
      return "Configuration missing";
    }

    console.warn(
      "Backend status check failed. Confirm that the backend is running and NEXT_PUBLIC_API_URL is correct.",
    );
    return "Unavailable";
  }
}

export default async function Home() {
  const backendConnectionState = await getBackendConnectionState();

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-zinc-950">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Artigiani</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Next.js frontend is running.
        </p>

        <dl className="mt-10 space-y-3 text-sm">
          <div className="flex gap-2">
            <dt className="font-medium">Frontend:</dt>
            <dd>Next.js</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium">Backend:</dt>
            <dd>{backendConnectionState}</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
