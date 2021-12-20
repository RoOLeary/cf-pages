import Link from 'next/link';
import { useEffect } from 'react'; 

export default function Post({ post }) {
    
    const { title, excerpt, slug, categories } = post;
    console.log(categories);
    return (
      <li className="Card">
          <Link href={`/blog/${slug}`} as={`/blog/${slug}`}>
            <a>
                <h1 className="Card--title">
                    <strong>{title.rendered}</strong>
                </h1>
                <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
            </a>
           
        </Link>
      </li>
    );
  }
  