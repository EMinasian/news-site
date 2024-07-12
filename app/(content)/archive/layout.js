import { Suspense } from "react";

export default function ArchiveLatout({ archive, latest }) {
  return (
    <>
      <h2>Archive</h2>
      <Suspense fallback={<p>Loading the archive...</p>}>{archive}</Suspense>
      <h2>Latest</h2>
      <Suspense fallback={<p>Loading the latest news...</p>}>{latest}</Suspense>
    </>
  );
}
