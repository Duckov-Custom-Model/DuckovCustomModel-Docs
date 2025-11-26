import { h } from 'vue'
import Theme from 'vitepress/theme'
import RegisterSW from './components/RegisterSW.vue'
import ToolCard from './components/ToolCard.vue'
import ToolGrid from './components/ToolGrid.vue'
import ModelPackage from './components/ModelPackage.vue'
import BundleStructure from './components/BundleStructure.vue'
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';
import './styles/custom.css'
import './styles/tree-view.css'
import 'virtual:group-icons.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-bottom': () => h(RegisterSW)
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
  },
  setup() {
    const route = useRoute();
    // 启用插件
    imageViewer(route);
  }
}