export NODE_ENV=production
rm -rfv build
bun build ./index.ts --compile --outfile ./build/start
cp -r public/ build/
