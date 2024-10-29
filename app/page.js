import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>Web Dev 2 Demos</h1>
      <p>Demos for Web Dev 2.</p>
      <li>
        <Link href="/week-2">Week 2 Demos</Link>
      </li>
      <li>
        <Link href="/week-3">Week 3 Demos</Link> 
      </li>
      <li>
        <Link href="/week-4">Week 4 Demos</Link>
      </li>
      <li>
        <Link href="/week-5">Week 5 Demos</Link> 
      </li>
      <li>
        <Link href="/week-6">Week 6 Demos</Link>
      </li>
      <li>
        <Link href="/week-7">Week 7 Demos</Link> 
      </li>
      <li>
        <Link href="/week-8">Week 8 Demos</Link>
      </li>
      <li>
        <Link href="/week-3">Week 9 Demos</Link> 
      </li>
      <li>
        <Link href="/week-2">Week 10 Demos</Link>
      </li>      
    </div>
  );
}