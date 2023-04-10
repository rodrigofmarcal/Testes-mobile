describe ('Primeiro teste', () => {
   it('acessar o menu forms', async () => {
  await $('~Forms').click()
  await $('~text-input').setValue('Rodrigo')
   expect(await $('~text-input')).toBeDisplayed()
   await $('~Dropdown').click()
   await $('android=new UiSelector().text("This app is awesome")').click()
   await $('~button-Active').click()
   await $('android=new UiSelector().text("OK")').click()

    });
})