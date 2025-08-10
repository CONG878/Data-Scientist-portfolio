import { Github, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">CONG878</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              도메인 전문성을 바탕으로 데이터에서 실질적인 가치를 창출하는 피쳐 엔지니어입니다.
            </p>
            <div className="flex space-x-4">
              <Link href="mailto:cong878@example.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/cong878" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="/til" className="hover:text-blue-400 transition-colors">TIL</Link></li>
              <li><Link href="/knowledge" className="hover:text-blue-400 transition-colors">Knowledge</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/knowledge/data-science" className="hover:text-blue-400 transition-colors">Data Science</Link></li>
              <li><Link href="/knowledge/domain-expertise" className="hover:text-blue-400 transition-colors">Domain Knowledge</Link></li>
              <li><Link href="/knowledge/science-articles" className="hover:text-blue-400 transition-colors">Science & Articles</Link></li>
              <li><Link href="/coding/challenges" className="hover:text-blue-400 transition-colors">Coding Challenges</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 CONG878. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
