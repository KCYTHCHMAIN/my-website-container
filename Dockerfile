# Stage 1: Build (ใช้ Node.js มาสร้างไฟล์งาน)
FROM node:18-alpine AS builder
WORKDIR /app

# ก๊อปปี้ไฟล์รายการแพ็กเกจมาก่อน
COPY package*.json ./

# ติดตั้ง dependencies (เหมือนเราพิมพ์ npm install)
RUN npm install

# ก๊อปปี้โค้ดทั้งหมดลงไป
COPY . .

# สั่ง Build (จะได้โฟลเดอร์ dist ออกมา)
RUN npm run build

# Stage 2: Serve (ใช้ Nginx มาโชว์ผลลัพธ์)
FROM nginx:alpine

# ก๊อปปี้ "เฉพาะ" โฟลเดอร์ dist ที่ Build เสร็จแล้ว จาก Stage 1 มาใส่ Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# เปิด Port 80 ใน Container
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]