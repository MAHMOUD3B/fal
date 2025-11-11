import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">ف</span>
              </div>
              <span className="font-bold">فال الغربية</span>
            </div>
            <p className="text-sm opacity-90">شركة متخصصة في تقديم حلول متكاملة في تقنية المعلومات والخدمات الحكومية</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/#about" className="opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  عن الشركة
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/1" className="opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  تقنية المعلومات
                </Link>
              </li>
              <li>
                <Link href="/services/3" className="opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  الأمن والسلامة
                </Link>
              </li>
              <li>
                <Link href="/services/4" className="opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  العقارات
                </Link>
              </li>
              <li>
                <Link href="/services/5" className="opacity-90 hover:opacity-100 hover:text-accent transition-all">
                  المقاولات
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">المتابعة</h4>
            <p className="text-sm opacity-90 mb-4">تابعنا على وسائل التواصل الاجتماعي</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-primary-foreground/20 rounded hover:bg-accent hover:scale-110 transition-all flex items-center justify-center"
              >
                f
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary-foreground/20 rounded hover:bg-accent hover:scale-110 transition-all flex items-center justify-center"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary-foreground/20 rounded hover:bg-accent hover:scale-110 transition-all flex items-center justify-center"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>جميع الحقوق محفوظة 2025 © شركة فال الغربية</p>
        </div>
      </div>
    </footer>
  )
}
