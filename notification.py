import asyncio, json
from aiogram import Bot, Dispatcher, F, types
from aiogram.filters import CommandStart

TOKEN = "8963992215:AAG6fSdZyf1KZ5z6ITwRQ6TpPwCsZGPeLss"
dp = Dispatcher()

@dp.message(F.web_app_data)
async def handle_web_app_data(message: types.Message):
    data = json.loads(message.web_app_data.data)
    if data.get('action') == "timer_finished":
        await message.answer(f"⏰ Таймер *{data['name']}* завершен!", parse_mode="Markdown")

async def main():
    bot = Bot(token=TOKEN)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())