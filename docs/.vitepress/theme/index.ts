import { h } from 'vue'
import Layout from './error/Layout.vue'
import Theme from 'vitepress/theme'
import RegisterSW from './components/RegisterSW.vue'
import ToolCard from './components/ToolCard.vue'
import ToolGrid from './components/ToolGrid.vue'
import ModelPackage from './components/ModelPackage.vue'
import BundleStructure from './components/BundleStructure.vue'
import BundleInfoEditor from './components/BundleInfoEditor.vue'
import ReleaseInfo from './components/ReleaseInfo.vue'
import Input from './components/ui/Input.vue'
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';
import './styles/custom.css'
import './styles/tree-view.css'
import 'virtual:group-icons.css'
import 'tailwindcss/tailwind.css'

export default {
  ...Theme,
  NotFound: Layout,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-bottom': () => h(RegisterSW),
      'not-found': () => h(Layout)
    })
  },
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx);
    // 注册全局组件（可选）
    ctx.app.component('vImageViewer', vImageViewer);
    ctx.app.component('ToolCard', ToolCard);
    ctx.app.component('ToolGrid', ToolGrid);
    ctx.app.component('ModelPackage', ModelPackage);
    ctx.app.component('BundleStructure', BundleStructure);
    ctx.app.component('BundleInfoEditor', BundleInfoEditor);
    ctx.app.component('ReleaseInfo', ReleaseInfo);
    ctx.app.component('Input', Input);
  },
  setup() {
    const route = useRoute();
    // 启用插件
    imageViewer(route);
  }
}