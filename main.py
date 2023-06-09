import telebot
from telebot import types

bot = telebot.TeleBot('')

# Обработчик команды /start
@bot.message_handler(commands=['start'])
def send_welcome(message):
    # Отправляем приветственное сообщение и кнопку
    reply_markup = types.InlineKeyboardMarkup()
    url_button1 = types.InlineKeyboardButton("Генератор Никнеймов", web_app=types.WebAppInfo(''))
    reply_markup.add(url_button1)
    bot.reply_to(message, '➣ Добро пожаловать!\n\n➢ Нажмите на кнопку ниже, чтобы перейти к Веб-Приложению.', reply_markup=reply_markup)


bot.polling()