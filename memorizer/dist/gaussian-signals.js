// Keep the unit filters for manually added cards.
window.SIGNAL_UNITS = {
  "conditional-moments": "תוחלת ושונות מותנות",
  "gaussian-scalars": "משתנים אקראיים גאוסיים",
  "gaussian-vectors": "וקטורים אקראיים גאוסיים"
};
window.signalsUnitFor = filter => filter==='all'?'':window.SIGNAL_UNITS[filter]?filter:'conditional-moments';

(() => {
  // Exact IDs of the retired built-in cards, including copies in older backups.
  const retiredIds = new Set([
  "gs_density",
  "gs_standard",
  "gs_normalize",
  "gs_cdf",
  "gs_tails",
  "gs_characteristic",
  "gs_mgf",
  "gs_second",
  "gs_odd",
  "gs_even",
  "gs_fourth",
  "gs_fourth-raw",
  "gs_square",
  "gs_affine",
  "gs_sum",
  "gs_random-sign",
  "gs_symmetry",
  "gs_degenerate",
  "gs_random-sum",
  "gs_random-phase",
  "gs_absolute",
  "gs_nonlinear",
  "gv_definition",
  "gv_joint",
  "gv_parameters",
  "gv_characteristic",
  "gv_density",
  "gv_singular",
  "gv_singular-example",
  "gv_marginals",
  "gv_independent-build",
  "gv_affine",
  "gv_linear-combination",
  "gv_uncorrelated",
  "gv_block-independent",
  "gv_diagonalize",
  "gv_diagonal-example",
  "gv_whitening",
  "gv_construct",
  "gv_sum",
  "gv_conditional",
  "gv_residual",
  "gv_conditional-pair",
  "gv_fourth",
  "gv_squared-covariance",
  "gv_random-sign-counterexample",
  "gv_redundant",
  "gv_process",
  "gv_linear-system",
  "gv_wss",
  "gv_quadrature"
]);

  window.removeRetiredGaussianCards = data => {
    const removed = new Set(data.items.filter(item => item.course === 'signals' && retiredIds.has(item.id)).map(item => item.id));
    if (!removed.size) return false;

    data.items = data.items.filter(item => !removed.has(item.id));
    for (const item of data.items) item.links = item.links.filter(id => !removed.has(id));
    for (const id of removed) delete data.progress?.[id];
    return true;
  };
})();
