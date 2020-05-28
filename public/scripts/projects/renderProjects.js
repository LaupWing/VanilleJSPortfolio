var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function renderProjects(cb = null) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('../../assets/projects.json');
        const projects = yield res.json();
        const projectsContainer = document.querySelector('section.projects');
        projects.forEach((project) => {
            const projectElement = `
            <div class="project">
                <h3>${project.title}</h3>
                <img src="${project.img}" alt="">
                <p></p>
            </div>
        `;
            projectsContainer === null || projectsContainer === void 0 ? void 0 : projectsContainer.insertAdjacentHTML('beforeend', projectElement);
        });
        if (cb) {
            cb();
        }
    });
}
