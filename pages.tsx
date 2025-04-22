import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Seção lateral - visível apenas em desktop */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-10 flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sistema Administrativo</h1>
          <p className="text-gray-300">Gerencie seus recursos com facilidade e segurança</p>
        </div>

        <div className="relative h-64 w-full">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Ilustração do sistema"
            fill
            className="object-contain"
          />
        </div>

        <div>
          <p className="text-sm text-gray-400">© 2025 Sistema Administrativo. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Seção do formulário */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-white">
        <div className="w-full max-w-md">
          {/* Logo para mobile */}
          <div className="md:hidden flex justify-center mb-8">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">SA</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Bem-vindo de volta</h2>
          <p className="text-gray-600 mb-8">Por favor, entre com suas credenciais para acessar o sistema</p>

          {/* Formulário de login */}
          <form action="/api/login" method="POST" className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome de usuário ou e-mail
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="login-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Digite seu usuário ou e-mail"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                    Esqueci minha senha
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="login-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Digite sua senha"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Lembrar-me
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Entrar
            </button>
          </form>

          {/* Rodapé do formulário */}
          <div className="mt-8 text-center text-sm text-gray-600 md:hidden">
            <p>© 2025 Sistema Administrativo</p>
          </div>
        </div>
      </div>
    </div>
  )
}
