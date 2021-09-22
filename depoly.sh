echo "uploading to node03"
scp -r  -P 2223 ./build/*   root@node03.linkease.com:/home/jiajia/linkease-web/doc.linkease.com/
