import {Link} from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <div>
        <h2>Meus Produtos</h2>
        <ul>
          <li><Link href="/produtos/tenis" >Tênis</Link></li>
          <li><Link href="/produtos/camisa" >Camisa</Link></li>
          <li><Link href="/produtos/meia" >Meia</Link></li>
          <li><Link href="/produtos/calca" >Calça</Link></li>
        </ul>
      </div>

    </>
  )
}
