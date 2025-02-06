/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
		{
			protocol: 'http',
			hostname: '31.57.228.93',
			port: '8000',
			pathname: '/media/service/**'
		}
		]
	}
}


export default nextConfig;

