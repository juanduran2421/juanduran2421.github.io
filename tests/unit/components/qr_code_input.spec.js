import QRCodeInput from "@/components/QRCodeInput";
import {shallowMount} from "@vue/test-utils";
import {createStore} from "vuex";

describe("QRCodeInput.vue", () => {
  describe("mountain component", () => {
    it("renders qr code input", () => {
      const wrapper = shallowMount(QRCodeInput)

      const component = wrapper.find('.hello')
      expect(component.classes()).toContain('hello')
    })
  })

  describe("mountain component v3", () => {
    const store = createStore({
      state() {
        return { count: 1}
      }
    })

    const wrapper = shallowMount(QRCodeInput, {
      global: {
        pluggin: [store]
      }
    })

    it("renders qr code input with text", () => {
      const component = wrapper.find("#btn-generate")
      expect(component.text()).toStrictEqual('Generar QR')
    })

    it("renders text input and changes value", () => {
      const component = wrapper.find("#txt-qr-code")

      component.setValue("text")
      expect(wrapper.vm.qrCodeInput).toStrictEqual('text')
    })
  })

  describe("actions and mocks", () => {
    it("tigger click and test the emit", () => {

      const spySendCode = jest.spyOn(QRCodeInput.methods, "sendQRCode")
      const wrapper = shallowMount(QRCodeInput)

      const component = wrapper.find("#txt-qr-code")
      component.setValue("text")

      wrapper.vm.sendQRCode()

      expect(spySendCode).toBeCalled()
      expect(wrapper.emitted()).toHaveProperty("qrCodeInput")
      expect(wrapper.emitted("qrCodeInput")).toHaveLength(1)
      expect(wrapper.emitted("qrCodeInput")[0]).toStrictEqual(["text"])
      expect(wrapper.emitted()).lastCalledWith("text")
    })

    it("the button is disabled by default", async () => {

      const wrapper = shallowMount(QRCodeInput)

      let component = wrapper.find("#txt-qr-code")
      component.setValue("")

      await wrapper.vm.$nextTick()

      expect(wrapper.find("#btn-generate").attributes().disabled).toBeDefined()

      component = wrapper.find("#txt-qr-code")
      component.setValue("text")

      await wrapper.vm.$nextTick()

      expect(wrapper.find("#btn-generate").attributes().disabled).toBeUndefined()
    })
  })
})
