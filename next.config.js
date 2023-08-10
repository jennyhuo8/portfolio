/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test:/\.pdf$/,
            use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'static/pdf/', 
                    publicPath: '/_next/static/pdf/',
                    }
                }
            ]
        })
        return config;
    }
}